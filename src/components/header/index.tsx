import React, { FC } from 'react'

import { Link, Wrapper, WrapperSettings } from './styles'
import { Typography } from '../typography'

export const Header: FC = () => {
  return (
    <Link>
      <Wrapper>
        <Typography.Logo text={'Modsen Todo list'} />
      </Wrapper>

      <Wrapper>
        <WrapperSettings>
          <Typography.Header text={'Home'} />
        </WrapperSettings>
        <WrapperSettings>
          <Typography.Header text={'Settings'} />
        </WrapperSettings>
      </Wrapper>
    </Link>
  )
}
