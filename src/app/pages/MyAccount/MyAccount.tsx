import { Layout } from '../../components'

export const MyAccount = () => {
  return (
    <Layout>
      <div className='w-72 h-36 border-stone-500 border-2 rounded-lg'>
        <div className='flex justify-center items-center py-2'>
          <p className='font-medium'>Email: </p> <span className='ml-2 font-light'>robertocg21dev@gmail.com</span>
        </div>
        
        <div className='flex justify-center items-center pb-2'>
          <p className='font-medium'>Full name: </p> <span className='ml-2 font-light'>Roberto Contreras</span>
        </div>
        
        <div className='flex justify-center items-center pb-2'>
          <p className='font-medium'>Registed at: </p> <span className='ml-2 font-light'>19/04/2024</span>
        </div>

        <div className='flex justify-center items-center pb-2'>
          <p className='font-medium'>type of user: </p> <span className='ml-2 font-light'>Customer</span>
        </div>
      </div>
    </Layout>
  )
}
