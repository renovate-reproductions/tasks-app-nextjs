// https://qiita.com/Takepepe/items/eec6e1d2101570e7e241
import 'styled-components'
import { Theme } from "../src/interfaces/ui/style/theme";

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
