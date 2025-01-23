import AsyncStorage from '@react-native-async-storage/async-storage';

export const get = async (key?: string) => {
  if (!key) return;

  return AsyncStorage.getItem(key);
};

export const set = async (key?: string, value: string = '') => {
  if (!key) return;

  await AsyncStorage.setItem(key, value);
};

export const remove = async (key?: string) => {
  if (!key) return;

  await AsyncStorage.removeItem(key);
};
