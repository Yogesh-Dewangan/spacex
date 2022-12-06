import { useEffect, useState } from 'react';
import CardSection from './CardSection';
import FormSection from './FormSection';
import Header from './Header';
import HeroSection from './HeroSection';

export default function Home() {

    const [capsules, setCapsules] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');

    useEffect(() => {
        setIsLoading(true);
        getSpaceXData()
            .then(res => {
                // console.log(res);
                setCapsules(res);
                setIsLoading(false);
            })
    }, [])

    const getSpaceXData = async () => {
        const res = await fetch('https://api.spacexdata.com/v3/capsules', {
            method: 'GET'
        })
        return res.json();
    }

  return (
    <div className="container-fluid p-0 bg-light bg-opacity-75">
      <Header />
      <HeroSection />
      <FormSection capsules={capsules} isLoading={isLoading} setIsLoading={setIsLoading} query={query} setQuery={setQuery}/>
      <CardSection capsules={capsules} isLoading={isLoading} query={query}/>
    </div>
  );
}
