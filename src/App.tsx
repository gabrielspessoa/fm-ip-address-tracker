import { useState } from 'react';
import { Card } from './components/Card';
import { Input } from './components/Input';
import spinnerUrl from '../images/spinner.svg';

export default function App() {
  const [ip, setIp] = useState('');
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  function getLocationByIp(ip: string) {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_XaBwfvZJTAleQDLQXQ0FVmcss0mS1&ipAddress=${ip}`
    )
      .then((response) => response.json)
      .then((data) => {});
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setIp(event.currentTarget.value);
  }

  function handleClick() {
    setIsLoading(false);
  }

  return (
    <div className='flex flex-col h-full'>
      <div className="flex-[3] bg-[url('../images/pattern-bg.png')] bg-no-repeat bg-cover flex flex-col items-center shadow-xl z-10">
        <h1 className='text-white text-2xl my-5'>IP Address Tracker</h1>
        <Input onChange={handleChange} onClick={() => alert('a')}>
          Search for any IP address or domain
        </Input>
      </div>

      <div className='relative flex-1 flex-grow-[6] bg-slate-300'>
        <div
          className={`absolute bg-white rounded-xl px-5 py-5 ${
            !isLoading ? `min-h-[8rem]` : null
          } -translate-y-1/2 top-0 left-0 right-0 w-fit mx-auto flex shadow-2xl z-20`}
        >
          {isLoading ? (
            <img src={spinnerUrl} className='w-6' />
          ) : (
            <>
              <Card title='IP ADDRESS' value={ip}></Card>
              <Card title='LOCATION' value='Brooklyn, NY 10001'></Card>
              <Card title='TIMEZONE' value='UTC -05:00'></Card>
              <Card title='ISP' value='SpaceX Starlink'></Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
