import HelloWorld from '../components/HelloWorld'
import AccountsList from '../components/Accounts/List'
import AccountsView from '../components/Accounts/View'
import AccountsCreate from '../components/Accounts/Create'
import AccountsEdit from '../components/Accounts/Edit'
import BankList from '../components/Banks/List'
import Login from '../components/Login/Form'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/contas',
    component: AccountsList
  },
  {
    path: '/contas/novo',
    component: AccountsCreate
  },
  {
    path: '/contas/:id',
    component: AccountsView
  },
  {
    path: '/contas/:id/editar',
    component: AccountsEdit
  },
  {
    path: '/bancos',
    component: BankList
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes
