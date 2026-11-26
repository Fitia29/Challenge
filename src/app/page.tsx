import LastEventSection from "@/features/home/event/last-event";
import FuturEvent from "@/features/home/event/futur-event";
import Footer from "@/features/home/footer/footer";
export default function Page() {
  return (
    <div>
      <FuturEvent/>
      <LastEventSection />
      <Footer/>
    </div>
  );
}