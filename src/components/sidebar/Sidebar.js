  import './sidebar.scss';
  import logo from '../../image/logo.png'
  import {ReactComponent as Overview} from '../../image/overview.svg'
  import {ReactComponent as UsersIcon} from '../../image/users.svg'
  import {ReactComponent as IdeasIcon} from '../../image/ideas.svg'
  import {ReactComponent as ContactsIcon} from '../../image/contacts.svg'
  import {ReactComponent as AgentsIcon} from '../../image/agents.svg'
  import {ReactComponent as ArticleslIcon} from '../../image/articles.svg'
  import {ReactComponent as SettingslIcon} from '../../image/settings.svg'
  import {ReactComponent as SubscriptionlIcon} from '../../image/subscription.svg'
 

  const Sidebar = () => {
    return (
      <div className="sidebar">
        <a href="/" className="sidebar__logo"><img src={logo} alt="" />Dashboard</a>
        <ul className="sidebar__list">
          <div className="sidebar__item">
            <div className="sidebar__icon-item">
              <Overview className="svg" width="16" height="16"/>
              <span>Overview</span>  
            </div>
          </div>
          <div className="sidebar__item">
            <div className="sidebar__icon-item">
                <UsersIcon className="svg" width="16" height="11"/>
              <span>Users</span>  
            </div>
          </div>
          <div className="sidebar__item">
            <div className="sidebar__icon-item">
                <IdeasIcon className="svg" width="16" height="16"/>
              <span>Ideas</span>  
            </div>
          </div>
          <div className="sidebar__item">
            <div className="sidebar__icon-item">
                <ContactsIcon className="svg" width="16" height="11"/>
              <span>Contacts</span>  
            </div>
          </div>
          <div className="sidebar__item">
            <div className="sidebar__icon-item">
                <AgentsIcon className="svg" width="16" height="16"/>
              <span>Users</span>  
            </div>
          </div>
          <div className="sidebar__item">
            <div className="sidebar__icon-item">
                <ArticleslIcon className="svg" width="16" height="16"/>
              <span>Users</span>  
            </div>
          </div>
        </ul>
        <hr/>
        <ul className="sidebar__list settingsl-list">
          <div className="sidebar__item">
            <div className="sidebar__icon-item">
              <SettingslIcon className="svg" width="16" height="16"/>
              <span>Settings</span>  
            </div>
          </div>
          <div className="sidebar__item">
            <div className="sidebar__icon-item">
                <SubscriptionlIcon className="svg" width="16" height="16"/>
              <span>Subscription</span>  
            </div>
          </div>
        
        </ul>
      </div>
    )
  }

  export default Sidebar