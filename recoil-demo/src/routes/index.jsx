// 路由配置
import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../components/Cart'
import Catalog from '../components/Catalog'
// 这样import浪费资源，影响首页速度，应该不点击就不会加载（推迟加载），切换到路由后加载
// const Car = lazy(() => import('@/pages/Car'))


export default function RoutesConfig() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path='/' element={<Catalog />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </Suspense>
  )
}
