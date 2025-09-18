import { readdirSync, statSync } from 'fs'
import { join } from 'path'

export const loadLocales = () => {
  const localeNamesMap = {
    en: 'English',
    pl: 'Polski',
  }

  const localesRoot = join(process.cwd(), 'i18n/locales')
  const entries = readdirSync(localesRoot)

  const languageFolders = entries.filter((entry) => {
    const fullPath = join(localesRoot, entry)
    return statSync(fullPath).isDirectory()
  })

  return languageFolders.map((langFolder) => {
    const folderPath = join(localesRoot, langFolder)
    const files = readdirSync(folderPath).map((file) => `${langFolder}/${file}`)
    return {
      code: langFolder,
      name: localeNamesMap[langFolder] ?? 'Unregistered',
      files,
    }
  })
}
