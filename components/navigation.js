import React from 'react'

// Components
import Link from 'next/link'
// ray test touch <
import { Button } from 'rebass'
import Space from '@rebass/space'
// ray test touch >

function Navigation ({ url, page }) {
  return (
    <div>
      {page > 1 && (
        <Link href={`${url}${page - 1}`}>
          <Button>Previous</Button>
        </Link>
      )}
      {page > 1 && (
        <Space x={3} />
      )}
      <Link href={`${url}${(page || 1) + 1}`}>
        <Button>Next</Button>
      </Link>
    </div>
  )
}

export default Navigation
