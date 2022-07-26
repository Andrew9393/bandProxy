import './tasks.scss'

const Tasks = () => {
  return ( 
    <div className="information tasks">
      <div className="information__header">
        <div className="information__title">Tasks</div>
        <div className="view">View all</div>
      </div>
      <p className="information__subtitle ">Today</p>
    <div className="information__list">
      <div className="information__item">
        <div className="information__item-value ">
        Create new task          
        </div>
        <div className="information__item-res">
          <span className="like-btn information-btn plus-btn"></span>
        </div>
      </div>
        <div className="information__item">
          <div className="information__item-value">
          
            <label>
              <input 
                type="checkbox"
                name='radioname'
                value="finish-ticket"
                className='checkbox__item' />
                <span className="custom-radio"></span>
                Finish ticket update
              </label>
            
          </div>
          <div className="information__item-res">
            <div className='like-btn information-btn low'>Urgent</div>         
          </div>
        </div>
        <div className="information__item">
          <div className="information__item-value">
            
            <label>
              <input 
                type="checkbox"
                name='radioname'
                value="finish-ticket"
                className='checkbox__item' />
                <span className="custom-radio"></span>
                Create new ticket example
              </label>
            
          </div>
          <div className="information__item-res">
            <div className='like-btn information-btn normal'>New</div>       
          </div>
        </div>
        <div className="information__item">
          <div className="information__item-value">
            
            <label>
              <input 
                type="checkbox"
                name='radioname'
                value="finish-ticket"
                className='checkbox__item' />
                <span className="custom-radio"></span>
                Update ticket report
              </label>
            
          </div>
          <div className="information__item-res">
            <div className='like-btn information-btn default'>Default</div>       
          </div>
        </div>
    </div>
    </div>
  );
}
 
export default Tasks;