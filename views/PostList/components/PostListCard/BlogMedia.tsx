import { Box, BoxProps, Img } from '@chakra-ui/react'
import * as React from 'react'

interface BlogMediaProps extends BoxProps {
  src: string
  alt: string
  href: string
}

export const BlogMedia = (props: BlogMediaProps) => {
  const { src, alt, href, ...rest } = props
  return (
    <Box
      pos="relative"
      cursor="pointer"
      className="group"
      h={{ base: '20rem', lg: '12rem' }}
      overflow="hidden"
      {...rest}
    >
      <a href={href} target="_blank">
        <Img
          w="full"
          h="full"
          objectFit="contain"
          htmlWidth="672"
          htmlHeight="448"
          src={src}
          alt={alt}
          transition="all 0.2s"
          _groupHover={{ transform: 'scale(1.05)' }}
        />
      </a>
    </Box>
  )
}
