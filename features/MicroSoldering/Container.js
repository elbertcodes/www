import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faEnvelope, faScrewdriver } from '@fortawesome/free-solid-svg-icons';
import scrollToSection from '../../helpers/scrollToSection';
import AOS from 'aos';
const ReactRotatingText = require('react-rotating-text');
import { TrustedBy } from '../../components';
import { MailInForm, MailInSteps } from '../../components/mail-in';
import { Prices, WhyUs } from '../../components/microsoldering';

export default function MicroSoldering() {

  const router = useRouter();

  useEffect(() => {
    AOS.init();
  });

  const [service, setService] = useState(null);

  return(
    <div>
      <Head>
        <title>Micro Soldering Service - iPhone & MacBook Repair in San Francisco | Gelatotech</title>

        {/* HTML Meta Tags */}
        <meta name="description" content="iPhone or MacBook logic board damaged? Our skilled technicians can fix any problem. Most common problem takes 1-2 days to repair. Schedule your repair today!" />
        <meta name="keywords" content="motherboard, solder, soldering, micro soldering, ipad, ipad pro, ipad mini, screen repair, battery replacement, fix, on-demand, on demand, driver, technician, fast, quick, San Francisco, Bay Area, CA, sf" />

        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="Mobile iPhone & Macbook Micro Soldering in San Francisco" />
        <meta itemProp="description" content="On-demand and mail-in iPhone/MacBook micro soldering services." />
        <meta itemProp="image" content="images/micro-soldering.jpg" />

        <link rel="stylesheet" href="../stylesheets/micro-soldering.css" />
      </Head>
      <section className="hero" id="hero">
        <div className="hero-body container">
          <h1 
            className="header-title is-hidden-mobile" 
            style={{ 
              fontWeight: 'bold', 
              fontSize: '3em',
          }}>
            iPhone/MacBook Micro Soldering
          </h1>
          <h1 
            className="header-title is-hidden-tablet is-hidden-desktop"
            style={{ 
              fontWeight: 'bold', 
              fontSize: '3em',
              marginBottom: '-1.8em',
              width: '100%',
             }}
          >
            Micro Soldering
          </h1>
          <h1 
            className="header-title is-hidden-desktop is-hidden-tablet"
            style={{
              marginBottom: '-1em',
            }}
          >
            <ReactRotatingText style={{ fontSize: '2em' }} 
              items={[
                'iPhone', 
                'MacBook', 
                'Motherboard', 
                'Water Damage', 
                'Data Recovery',
              ]} 
            />
           </h1>
          <h2 className="subtitle is-hidden-mobile" style={{ textAlign: 'center' }}>
            Motherboard • Water Damage • Data Recovery
          </h2>
        </div>
        <div className="is-3 has-text-centered" style={{ marginBottom: '1em' }}>
          <a 
            className="button is-info is-large" 
            onClick={()=>{
              scrollToSection("serviceSelector");
            }}
          >
            Repair My Device
            <FontAwesomeIcon 
              icon={faScrewdriver} 
              style={{ height: '60%', marginLeft: '0.3em' }} 
            />
          </a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', color: 'white', fontSize: '0.7em' }}>
          <a style={{ color: 'white' }} onClick={()=>router.push('/#repair')}>for screen repair and other services, click here</a>
        </div>
      </section>
      <TrustedBy />
      <WhyUs />
      <div id="serviceSelector" style={{ backgroundColor: 'gainsboro', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '2.7em', flexDirection: 'column' }}>
        <h1 className="heading" style={{ fontSize: '1em', marginBottom: '1em' }}>Select service</h1>
        <div className="is-hidden-mobile">
          <div className="tabs is-toggle" style={{ marginBottom: '4em',  backgroundColor: 'white', borderRadius: '6px' }}>
            <ul>
              <li 
                className={`${service === 'mailIn' ? 'is-active' : ''}`}
                onClick={() => {
                  setService('mailIn');
                }}
                style={styles.tabLI}
              >
                <a style={styles.tabA}>
                  <FontAwesomeIcon icon={faEnvelope} style={{ width: '3em'}} />
                  <span className="heading" style={{ fontSize: '1em' }}>
                    Mail-In
                  </span><hr style={{ width: '100%', height: '1px', margin: '0', marginBottom: '1em' }} />
                  <span style={{ fontSize: "0.8em" }}>Send your device by mail to us for repair.</span>
                </a>
              </li>
              <li 
                className={`${service === 'onDemand' ? 'is-active' : ''}`}
                onClick={() => {
                  setService('onDemand');
                }}
                style={styles.tabLI}
              >
                <a style={styles.tabA}>
                  <FontAwesomeIcon icon={faCar} style={{ width: '3em'}} />
                  <span className="heading" style={{ fontSize: '1em' }}>FREE Pickup</span><hr style={{ width: '100%', height: '1px', margin: '0', marginBottom: '1em' }} />
                  <span style={{ fontSize: "0.8em" }}>Our <strong>San Francisco</strong> technicians drive to you.</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="is-hidden-tablet is-hidden-desktop">
        <div className="tabs is-toggle" style={{ marginBottom: '4em' }}>
          <ul>
            <li 
              className={`${service === 'mailIn' ? 'is-active' : ''}`}
              onClick={() => {
                setService('mailIn');
              }}
              style={{ width: '10em' }}
            >
              <a style={styles.tabA}>
                <FontAwesomeIcon icon={faEnvelope} style={{ width: '3em'}} />
                <span className="heading" style={{ fontSize: '1em' }}>
                  Mail-In
                </span>
              </a>
            </li>
            <li 
              className={`${service === 'onDemand' ? 'is-active' : ''}`}
              onClick={() => {
                setService('onDemand');
              }}
              style={{ width: '10em' }}
            >
              <a style={styles.tabA}>
                <FontAwesomeIcon icon={faCar} style={{ width: '3em'}} />
                <span className="heading" style={{ fontSize: '1em' }}>FREE Pickup</span>
              </a>
            </li>
            </ul>
          </div>
        </div>
      </div>
      {
        service === 'mailIn'
          ? (
            <div style={{marginTop: '3em', overflow: 'scroll'}}>
              <MailInSteps step={0} />
            </div>
          )
        : ''
      }
      {
        service !== null
          ? (<MailInForm serviceType={service} repairType={'micro-soldering'} />)
          : ''
      }
      <Prices />
      <section>
        <div className="section" id="get-started"
          style={{
            backgroundImage: `url('images/elbert-with-phones-dark.jpg')`
          }}
        >
          <div className="container">
            <h3 className="title is-1" data-aos="fade-right" style={{color: 'white'}}>Book On-Demand Repair</h3>
            <h3 className="subtitle is-4" data-aos="fade-right" style={{color: 'white'}}>Our technicians drive to you!</h3><br />
            <a 
              className="button is-info is-large" 
              onClick={()=>{
                router.push('/#repair');
              }}
            >
              Book On-Demand
              <FontAwesomeIcon 
                icon={faCar} 
                style={{ height: '60%', marginLeft: '0.3em' }} 
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  tabLI: {
    width: '20em',
  },
  tabA: {
    padding: '2em',
    flexDirection: 'column'
  },
};
