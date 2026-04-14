import Header from "@/components/Header"
import Ticker from "@/components/Ticker"
import Hero from "@/components/Hero"
import Quiz from "@/components/Quiz"
import AllProducts from "@/components/AllProducts"
import ReportSection from "@/components/ReportSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Ticker />
      <Hero />
      <Quiz />
      <AllProducts />
      <ReportSection />
      <Footer />
    </main>
  )
}
