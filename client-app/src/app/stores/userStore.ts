import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { User, UserFormValues } from '../models/user';
import { router } from '../router/Routes';
import { store } from './store';

export default class UserStore {
  user: User | null = null;
  refreshTokenTimeout?: NodeJS.Timeout;

  constructor() {
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    return !!this.user;
  }

  login = async (creds: UserFormValues) => {
    try {
      const user = await agent.Account.login(creds);
      store.commonStore.setToken(user.token);
      this.startRefreshTokenTimer(user);
      runInAction(() => (this.user = user));
      router.navigate('/activities');
      store.modalStore.closeModal();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  logout = () => {
    store.commonStore.setToken(null);
    window.localStorage.removeItem('jwt');
    this.user = null;
    router.navigate('/');
  };

  getUser = async () => {
    try {
      const user = await agent.Account.current();
      store.commonStore.setToken(user.token);
      runInAction(() => (this.user = user));
      this.startRefreshTokenTimer(user);
    } catch (error) {
      console.log(error);
    }
  };

  register = async (creds: UserFormValues) => {
    try {
      await agent.Account.register(creds);
      router.navigate(`/account/registerSuccess?email=${creds.email}`);
      store.modalStore.closeModal();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  setImage = (image: string) => {
    if (this.user) this.user.image = image;
  };

  setDisplayName = (name: string) => {
    if (this.user) this.user.displayName = name;
  };

  refreshToken = async () => {
    this.stopRefreshTokenTimer();
    try {
      const user = await agent.Account.refreshToken();
      runInAction(() => (this.user = user));
      store.commonStore.setToken(user.token);
      this.startRefreshTokenTimer(user);
    } catch (error) {
      console.log(error);
    }
  };

  private startRefreshTokenTimer(user: User) {
    const jwtToken = JSON.parse(atob(user.token.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - 60 * 1000;
    this.refreshTokenTimeout = setTimeout(this.refreshToken, timeout);
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
