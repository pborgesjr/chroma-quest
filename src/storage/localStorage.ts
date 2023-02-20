import AsyncStorage from '@react-native-async-storage/async-storage';

export const get = async (key: string) => {
  return AsyncStorage.getItem(key);
};

export const set = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

export const remove = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
