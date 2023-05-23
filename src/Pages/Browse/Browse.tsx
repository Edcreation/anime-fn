import { Route, Routes } from 'react-router-dom'
import Search from '../../components/Search'
import '../../styles/browse.styles.scss'
import Section from './HomeBrowser'
import Receiver from './SearchBrowser'
import GenreBrowser from './GenreBrowser'

function Browse() {
  return (
    <div data-testid='browser' className='browse h-max'>
        <Search />
        <Routes>
          <Route path='/' element={ <Section /> }></Route>
          <Route path='/anime/:query' element={ <Receiver /> }></Route>
          <Route path='/anime/genre/:query' element={ <GenreBrowser /> }></Route>
        </Routes> 
    </div>
  )
}

export default Browse