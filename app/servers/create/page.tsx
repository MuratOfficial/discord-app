import { getServers } from '@/actions/data'
import { ServerForm } from '@/components/form/server-form'
import React from 'react'

async function CreateServerPage() {

  const servers = await getServers();

  return (
    <div className='pl-24'>

      <ServerForm/>
    </div>
  )
}

export default CreateServerPage