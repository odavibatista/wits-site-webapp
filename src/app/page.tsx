import HeaderNoAuth from "@/components/HeaderNoAuth";
import PlatformButton from "@/components/PlatformButton";

export default function Home() {
  return (
    <main>
      <HeaderNoAuth />
      <PlatformButton image_url="/platforms/google-play.png" platform_name="Play Store"/>
      <PlatformButton image_url="/platforms/windows.png" platform_name="Windows"/>
      <PlatformButton image_url="/platforms/app-store.png" platform_name="App Store"/>
    </main>
  )
}
