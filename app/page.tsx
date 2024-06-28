import { CountdownTimer } from '@/components/CountdownTimer/CountdownTimer';
import Header from '@/components/Header';
let target = new Date('2024-07-02T02:13:00')
const timerLabels = ['days', 'hours', 'minutes', 'seconds']

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between p-2">
      <Header />
      <div className="flex h-screen items-center justify-center bg-cover bg-center">
        <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-semibold text-white text-[30px] md:text-[50px]">
              Prepare{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28e7b4] to-[#e6ee92ef]">
                {" "}
                for{" "}
              </span>
              Launch
            </h1>
          </div>
          <CountdownTimer targetDate={target.toISOString()} labels={timerLabels} />
        </div>
      </div>
    </main>
  );
}
