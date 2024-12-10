import { computed } from 'vue'
import { defineReadonlyState } from '../custom/define-readonly-state'

export const useThemeStore = defineReadonlyState(
  'theme-store',
  {
    appTheme: 'Light',
    toggleTheme: true,
    textClass: 'text-gray-800',
    bgClass: 'bg-white',
  },
  (props) => {
    const appTheme = computed(() => props.appTheme)

    const toggleTheme = computed(() => props.toggleTheme)
    const textClass = computed(() => props.textClass)
    const bgClass = computed(() => props.bgClass)

    function changeTheme() {
      props.toggleTheme = !props.toggleTheme
      setThemeToLocalStorage()
    }

    function switchTextClass() {
      props.toggleTheme ? (props.textClass = 'text-gray-800') : (props.textClass = 'text-white')
    }

    function switchBgClass() {
      props.toggleTheme ? (props.bgClass = 'bg-white') : (props.bgClass = 'bg-gray-800')
    }

    function changeAppTheme() {
      changeTheme()
      switchTextClass()
      switchBgClass()

      props.appTheme = props.toggleTheme ? (props.appTheme = 'Light') : (props.appTheme = 'Dark')
    }

    function getThemeDataFromLocalStorage() {
      const themeData = localStorage.getItem('themeData')

      if (typeof themeData !== 'object') {
        const parseThemeData = JSON.parse(themeData)
        props.toggleTheme = parseThemeData.toggleTheme
        switchTextClass()
        switchBgClass()
      }
    }

    function setThemeToLocalStorage() {
      localStorage.setItem(
        'themeData',
        JSON.stringify({
          appTheme: props.appTheme,
          toggleTheme: props.toggleTheme,
        }),
      )
    }

    return {
      appTheme,
      toggleTheme,
      bgClass,
      textClass,
      getThemeDataFromLocalStorage,

      changeAppTheme,
    }
  },
)
