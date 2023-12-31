import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Brand from '../../pages/Brand/Brand'
import EditBrand from '../../pages/Brand/EditBrand/EditBrand'
import Categories from '../../pages/Categories/Categories'
import AddCategory from '../../pages/Categories/AddCategory/AddCategory'
import CategoryDetails from '../../pages/Categories/CategoryDetails/CategoryDetails'
import Items from '../../pages/Items/Items'
import ItemDetails from '../../pages/Items/ItemDetails/ItemDetails'
import EditItem from '../../pages/Items/ItemDetails/EditItem/EditItem'
import AddItem from '../../pages/Items/AddItem/AddItem'
import Collections from '../../pages/Collections/Collections'
import AddCollection from '../../pages/Collections/AddCollection/AddCollection'
import CollectionDetails from '../../pages/Collections/CollectionDetails/CollectionDetails'
import EditCollection from '../../pages/Collections/CollectionDetails/EditCollection/EditCollection'
import Advertisements from '../../pages/Advertisements/Advertisements'
import Sale from '../../pages/Sale/Sale'
import SaleDetails from '../../pages/Sale/SaleDetails/SaleDetails'
import EditSale from '../../pages/Sale/SaleDetails/EditSale/EditSale'
import AddSale from '../../pages/Sale/AddSale/AddSale'
import AdvertisementDetails from '../../pages/Advertisements/AdvertisementDetails/AdvertisementDetails'
import EditAdvertisement from '../../pages/Advertisements/AdvertisementDetails/EditAdvertisement/EditAdvertisement'
import AddAdvertisement from '../../pages/Advertisements/AddAdvertisement/AddAdvertisement'

export default function Dashboard() {
  return <>
    <div className="row">
      <div className="col-md-12">
        <Navbar />
      </div>
    </div>
    <div className='row'>
      <div className='col-md-2'>
        <Sidebar />
      </div>
      <div className="col-md-10">
        <Routes>
          <Route path='/' element={<Navigate replace to='/brand' />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/brand/edit' element={<EditBrand />} />

          <Route path='/items' element={<Items />} />
          <Route path='/items/page/:pageNumber' element={<Items />} />
          <Route path='/items/:id' element={<ItemDetails />} />
          <Route path='/items/page/:pageNumber/:id' element={<ItemDetails />} />
          <Route path='/items/:id/edit' element={<EditItem />} />
          <Route path='/items/page/:pageNumber/:id/edit' element={<EditItem />} />
          <Route path='/items/addItem' element={<AddItem />} />

          <Route path='/collections' element={<Collections />} />
          <Route path='/collections/page/:pageNumber' element={<Collections />} />
          <Route path='/collections/:id' element={<CollectionDetails />} />
          <Route path='/collections/page/:pageNumber/:id' element={<CollectionDetails />} />
          <Route path='/collections/:id/edit' element={<EditCollection />} />
          <Route path='/collections/page/:pageNumber/:id/edit' element={<EditCollection />} />
          <Route path='/collections/addCollection' element={<AddCollection />} />

          <Route path='/sale' element={<Sale />} />
          <Route path='/sale/page/:pageNumber' element={<Sale />} />
          <Route path='/sale/:id' element={<SaleDetails />} />
          <Route path='/sale/page/:pageNumber/:id' element={<SaleDetails />} />
          <Route path='/sale/:id/edit' element={<EditSale />} />
          <Route path='/sale/page/:pageNumber/:id/edit' element={<EditSale />} />
          <Route path='/sale/addSale' element={<AddSale />} />

          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/page/:pageNumber' element={<Categories />} />
          <Route path='/categories/:id' element={<CategoryDetails />} />
          <Route path='/categories/page/:pageNumber/:id' element={<CategoryDetails />} />
          <Route path='/categories/addCategory' element={<AddCategory />} />

          {/* <Route path='/advertisements' element={<Advertisements />} />
          <Route path='/advertisements/:id' element={<AdvertisementDetails />} />
          <Route path='/advertisements/:id/edit' element={<EditAdvertisement />} />
          <Route path='/advertisements/addAdvertisement' element={<AddAdvertisement />} /> */}

          <Route path='/*' element={<Navigate replace to='/brand' />} />
        </Routes>
      </div>
    </div>
  </>
}
