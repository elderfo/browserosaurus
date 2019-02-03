import { IActivity } from '../model'

const activities: IActivity[] = [
  {
    appId: 'Brave-Browser-Dev',
    cmd: 'open "{URL}" -a Brave-Browser-Dev',
    hotKey: 'r',
    name: 'Brave Dev',
  },
  {
    appId: 'Brave Browser',
    cmd: 'open "{URL}" -a "Brave Browser"',
    hotKey: 'b',
    name: 'Brave Browser',
  },
  {
    appId: 'Chromium',
    cmd: 'open "{URL}" -a Chromium',
    hotKey: 'c',
    name: 'Chromium',
  },
  {
    appId: 'Firefox',
    cmd: 'open "{URL}" -a Firefox',
    hotKey: 'f',
    name: 'Firefox',
  },
  {
    appId: 'Firefox Developer Edition',
    cmd: 'open "{URL}" -a "Firefox Developer Edition"',
    hotKey: 'd',
    name: 'Firefox Developer Edition',
  },
  {
    appId: 'Firefox Nightly',
    cmd: 'open "{URL}" -a "Firefox Nightly"',
    hotKey: 'n',
    name: 'Firefox Nightly',
  },
  {
    appId: 'Google Chrome',
    cmd: 'open "{URL}" -a "Google Chrome"',
    hotKey: 'g',
    name: 'Google Chrome',
  },
  {
    appId: 'Google Chrome Canary',
    cmd: 'open "{URL}" -a "Google Chrome Canary"',
    hotKey: 'y',
    name: 'Google Chrome Canary',
  },
  {
    appId: 'Iridium',
    cmd: 'open "{URL}" -a Iridium',
    hotKey: 'i',
    name: 'Iridium',
  },
  {
    appId: 'Maxthon',
    cmd: 'open "{URL}" -a Maxthon',
    hotKey: 'm',
    name: 'Maxthon',
  },
  {
    appId: 'Min',
    cmd: 'open "{URL}" -a Min',
    hotKey: '-',
    name: 'Min',
  },
  {
    appId: 'Opera',
    cmd: 'open "{URL}" -a Opera',
    hotKey: 'o',
    name: 'Opera',
  },
  {
    cmd: 'open "{URL}" -a Safari',
    hotKey: 's',
    name: 'Safari',
  },
  {
    appId: 'Safari Technology Preview',
    cmd: 'open "{URL}" -a "Safari Technology Preview"',
    hotKey: 'p',
    name: 'Safari Technology Preview',
  },
  {
    appId: 'TorBrowser',
    cmd: 'open "{URL}" -a TorBrowser',
    hotKey: 't',
    name: 'TorBrowser',
  },
  {
    appId: 'Vivaldi',
    cmd: 'open "{URL}" -a Vivaldi',
    hotKey: 'v',
    name: 'Vivaldi',
  },
]

export default activities
