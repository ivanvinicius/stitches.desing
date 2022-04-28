import { styled } from '../'

export const Flex = styled(`div`, {
  display: `flex`,

  alignItems: `center`,
  justifyContent: `center`
})

export const Button = styled(`button`, {
  border: 0,
  cursor: `pointer`,
  appearance: `none`,

  fontSize: `$16`,
  fontWeight: `bold`,

  transition: `background .2s`,

  // scoped token
  $$shadowColor: ``,

  compoundVariants: [
    {
      color: `primary`,
      shadow: `true`,
      css: {
        $$shadowColor: `$colors$primaryDark`
      }
    },
    {
      color: `shape`,
      shadow: `true`,
      css: {
        $$shadowColor: `$colors$primaryLight`
      }
    }
  ],

  variants: {
    color: {
      primary: {
        backgroundColor: `$primary`,
        color: `$title`
      },
      shape: {
        backgroundColor: `$shape`,
        color: `$title`
      }
    },
    size: {
      small: {
        padding: `$16 $32`
      },
      large: {
        padding: `$32 $64`
      }
    },
    radius: {
      default: {
        borderRadius: `$default`
      },
      full: {
        borderRadius: `$full`
      }
    },
    shadow: {
      true: {
        boxShadow: `0 0 8px $$shadowColor`
      }
    }
  },

  defaultVariants: {
    color: `primary`,
    size: `small`,
    radius: `default`,
    shadow: `true`
  }
})
