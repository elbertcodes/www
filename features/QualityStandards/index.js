import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BookRepairButton } from '../../components';

export default function QualityStandards() {

  const router = useRouter();

  return (
    <div>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Mobile iPhone Repair in SF| Our Quality Standards | Gelatotech </title>
        {/* HTML Meta Tags */}
        <meta name="description" content="Learn about how we provide the best quality parts for our customers" />
        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="Mobile iPhone Repair in SF | Our Quality Standards | Gelatotech" />
        <meta itemProp="description" content="Learn about how we provide the best quality parts for our customers" />
        <meta itemProp="image" content='/images/pexels-photo-607812.jpeg' />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <link rel="stylesheet" href="/stylesheets/quality-standards.css" />
      </Head>
      <section id="blog">
        <div className="container blog-container">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
          {/* <Image src='/images/logo-square.png' width={80} height={70} /> */}
            <h1 className="title is-1">Quality standards</h1>
          </div>
            <Image src='/images/parts.jpeg' width={1000} height={400} className="blog-img" />
          <style jsx global>{`
            .blog-img {
              border-radius: 10px;
            }
          `}</style>
          <h2 className="title is-3">We Care ❤️</h2>
          <p>
            At GelatoTech, we work overtime to provide our customers the best quality parts and the best price we can get from the phone repair industry. <br />
            This is why we have <strong>4 different types of screens</strong>, providing you the best service we can deliver!
          </p>
          <div className="columns" style={{ marginTop: '2em' }}>
            <div className="column">
              <div className="card" style={{ borderRadius: '0.8em', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
                <div className="card-image">
                  <figure className="image columns is-centered has-text-centered" style={{ padding: '2em 0' }}>
                    <Image width={150} height={150} src="/images/repair-types/xo7-label.webp" alt="XO7" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">AFTERMARKET OX7</p>
                    </div>
                  </div>
                  <div className="content">
                    Aftermarket OX7 is the best third party manufactured replacement part sourced from the factories. We do not have direct involvement in the engineering of the replacement part. However, our sourcing team has thoroughly tested each replacement part before purchase. We guarantee the overall quality will be better than any other vendor due to our rigorous testing.
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card" style={{ borderRadius: '0.8em', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
                <div className="card-image">
                  <figure className="image columns is-centered has-text-centered" style={{ padding: '2em 0' }}>
                    <Image width={150} height={150} src="/images/repair-types/am-label.webp" alt="AM" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">AFTERMARKET AQ7</p>
                    </div>
                  </div>
                  <div className="content">
                    Aftermarket AQ7 is a third party manufactured replacement part with a lower cost component in it, still thoroughly and rigorously tested by our sourcing team. It usually allows our customers to have access to a less expensive part.
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card" style={{ borderRadius: '0.8em', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
                <div className="card-image">
                  <figure className="image columns is-centered has-text-centered" style={{ padding: '2em 0' }}>
                    <Image width={150} height={150} src="/images/repair-types/genuine-label.webp" alt="Genuine" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">GENUINE OEM</p>
                    </div>
                  </div>
                  <div className="content">
                    Genuine OEM parts are replacement parts that come from a device OEM. We currently distribute LG OEM Genuine replacement parts.
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card" style={{ borderRadius: '0.8em', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
                <div className="card-image">
                  <figure className="image columns is-centered has-text-centered" style={{ padding: '2em 0' }}>
                    <Image width={150} height={150} src="/images/repair-types/refurb-label.webp" alt="Refurb" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">REFURBISHED</p>
                    </div>
                  </div>
                  <div className="content">
                    A refurbished part means it has been reconditioned, repaired, rehabilitated, or similar to restore the replacement part to its original purpose. 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p style={{ margin: '2em 0' }}>
            For more information about the parts we provide, feel free to contact us via <a href="mailto:support@gelatotech.com" target="_blank">email</a> or <a href="tel:4156219055">phone</a>. 
          </p>
          <div className="section container" id="get-started" style={{ borderRadius: "8px", overflow: 'hidden', marginBottom: '5em' }}>
            <Image src="/images/iphones-bg.jpeg" layout="fill" objectFit='cover' />
            <div style={{ position: 'relative', marginBottom: '29px', padding: '2em' }}>
              <h2 className="title is-1" style={{ color: 'white' }}>Ready to get started?</h2>
              <h2 className="subtitle is-4" style={{ color: 'white' }}>iPhone Screen Repair only takes 15 minutes!</h2>
              <BookRepairButton />
            </div>
        </div>
        </div>
      </section>
    </div>
  )
}