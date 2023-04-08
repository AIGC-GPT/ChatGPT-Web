import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://s2.loli.net/2023/04/08/wJbRZSMnVmYajNi.png',
      name: 'ChatGPT之家',
      description: '<a href="https://github.com/Andecen/chatgpt-web" class="text-blue-500" target="_blank" >微信公众号：AI研究</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
