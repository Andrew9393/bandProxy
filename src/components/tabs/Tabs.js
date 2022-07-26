import './tabs.scss'

const Tabs = () => {
  return ( 
    <div className="tabs">
      <div className="tabs__item">
        <div className="tabs__name">Active</div>
        <div className="tabs__value">60</div>
      </div>
      <div className="tabs__item">
        <div className="tabs__name">Online</div>
        <div className="tabs__value">16</div>
      </div>
      <div className="tabs__item">
        <div className="tabs__name">Filtered</div>
        <div className="tabs__value">43</div>
      </div>
      <div className="tabs__item">
        <div className="tabs__name">Banned</div>
        <div className="tabs__value">64</div>
      </div>
    </div>
   );
}
 
export default Tabs;