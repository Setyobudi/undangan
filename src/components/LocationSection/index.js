import React, { Fragment } from 'react';
import { GOOGLE_MAPS_EKA } from '@/constants';
import { GOOGLE_MAPS_HAKIM } from '@/constants';
import { styWrapper } from './styles';
import Peta from '@assets/images/peta.jpeg';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Lokasi Acara</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_EKA}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Lokasi Eka</strong>
                </a>{' '}
                <br />
                Acara sudah berlangsung
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://maps.google.com/maps?q=7%C2%B045'52.7%22S%20111%C2%B0551'39.5%22E&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Eka & Hakim Wedding Party"
              ></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_HAKIM}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Lokasi Hakim</strong>
                </a>{' '}
                <br />
                Acara sudah berlangsung
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://maps.google.com/maps?q=Galang%20Networks&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Eka & Hakim Wedding Party"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
