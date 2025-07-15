import { Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <Theme appearance="dark" accentColor="blue">
      <Component {...pageProps} />
    </Theme>
  )
}
