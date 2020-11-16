import React from 'react';

import CardUserAds from './items/CardUserAds'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons'

const AdsUser = () => {
    return(
        <div className="box-ads-user">
            <div className="btn-buy-visibility">
                <FontAwesomeIcon icon={faMoneyBillWaveAlt} />
                <div className="text-buy-visi">Buy visibility</div>
            </div>
            <CardUserAds />
            <CardUserAds />
            <CardUserAds />
            <CardUserAds />
            <CardUserAds />
            <CardUserAds />
        </div>
    )
}

export default AdsUser;