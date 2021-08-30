import { Fragment } from 'react'
import { FirstComponent, SecondComponent } from '#components/index/index'

const IndexService = (): JSX.Element => {
  return (
    <Fragment>
      <FirstComponent />
      <SecondComponent />
    </Fragment>
  )
}

export default IndexService
