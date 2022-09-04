import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
//import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font main-font__wedding">Acara Resepsi dan Ngunduh Mantu</h2>
              <span className="sub-title sub-title__wedding">Insha Allah akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
            <WeddingInfoBox
                title="Acara Resepsi"
                time="08.00 WIB"
                date="Sabtu, 24 September 2022"
                description="RT 026 RW 012 Dusun Kajar Desa Kalipang, Kecamatan Grogol, Kabupaten Kediri"
            />
            <WeddingInfoBox
              title="Ngunduh Mantu"
              time="08.00 WIB"
              date="Minggu, 25 September 2022"
              description="RT 026 RW 012 Dusun Winongsari Kulon Desa Bakalan, Kecamatan Grogol, Kabupaten Kediri"
            />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
