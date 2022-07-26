import './tickets.scss'

const Tickets = () => {
  return ( 
    <div className="information">
      <div className="information__header">
        <div className="information__title">Unresolved tickets</div>
        <div className="view">View details</div>
      </div>
      <p className="information__subtitle ">Group: <span className="text-black">Support</span></p>
    <div className="information__list">
      <div className="information__item">
        <div className="information__item-value">
          Waiting on Feature Request          
        </div>
        <div className="information__item-res">
          4238        
        </div>
      </div>
      <div className="information__item">
        <div className="information__item-value">
          Awaiting Customer Response       
        </div>
        <div className="information__item-res">
          1005          
        </div>
      </div>
      <div className="information__item">
        <div className="information__item-value">
          Awaiting Developer Fix         
        </div>
        <div className="information__item-res">
          914        
        </div>
      </div>
      <div className="information__item">
        <div className="information__item-value">
          Pending        
        </div>
        <div className="information__item-res">
          281        
        </div>
      </div>
    </div>
    </div>
  );
}
 
export default Tickets;