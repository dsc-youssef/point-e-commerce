// Dependencies
import { FC } from 'react'

// Components
import Card from './Card';

const FeatureCards: FC = () => {
  return (
    <div className='container'>
      <div className='featureCards'>
        <Card icon="fas fa-shield-check" className="text-web-info-500" title="Guarantee" content="24 Months" />
        <Card icon="fas fa-credit-card" className="text-web-warning-600" title="Rate Paying" content="4 - 12 Months" />
        <Card icon="fas fa-shield-keyhole" className="text-web-primary-600" title="Payments" content="Secured" />
        <Card icon="fas fa-truck" className="text-web-success-600" title="Free Delivery" content="from $100" />
        <Card icon="fas fa-tag" className="text-web-danger-700" title="Brands" content="Only Top" />
      </div>
    </div>
  )
}

export default FeatureCards;
