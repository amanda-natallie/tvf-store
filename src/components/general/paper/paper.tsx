import { forwardRef, Ref } from 'react'
import {
  StyledPaperTitleWrapper,
  StyledPaperTitle,
  StyledPaperEndAdornment,
  StyledButtonPaper,
  StyledPaperFooterAlert,
  StyledPaperActions,
  StyledDefaultPaper,
} from './styles'
import { PaperProps } from './types'

export const Paper = forwardRef(
  (
    { width, height, bgColor = undefined, ...rest }: PaperProps,
    ref: Ref<HTMLDivElement>,
  ): JSX.Element => {
    const {
      alertProps = null,
      cardActionsProps = null,
      cardTitleProps = null,
      buttonPaperProps = null,
      isDialog = false,
      children,
    } = rest

    return (
      <>
        {buttonPaperProps ? (
          <div ref={ref}>
            <StyledButtonPaper variant="outlined" color="primary" {...buttonPaperProps}>
              {buttonPaperProps.children}
            </StyledButtonPaper>
          </div>
        ) : (
          <StyledDefaultPaper
            ref={ref}
            {...{ width, height, bgColor, ...rest }}
            noPadding={rest.noPadding ?? Boolean(cardTitleProps)}
            justifyContent={
              isDialog && cardActionsProps
                ? 'space-between'
                : isDialog && !cardActionsProps
                ? 'flex-start'
                : rest.justifyContent ?? 'stretch'
            }
          >
            {cardTitleProps && (
              <StyledPaperTitleWrapper
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                {...rest}
              >
                {cardTitleProps.children ? (
                  <>{cardTitleProps.children}</>
                ) : (
                  <>
                    <StyledPaperTitle {...rest}>{cardTitleProps.title} </StyledPaperTitle>
                    {cardTitleProps.endAdornment && (
                      <StyledPaperEndAdornment>
                        {cardTitleProps.endAdornment}
                      </StyledPaperEndAdornment>
                    )}
                  </>
                )}
              </StyledPaperTitleWrapper>
            )}
            {children}
            {cardActionsProps && (
              <StyledPaperActions
                {...rest}
                justifyContent="flex-end"
                flexDirection="row"
                width="100%"
              >
                {cardActionsProps.children}
              </StyledPaperActions>
            )}
            {alertProps && (
              <StyledPaperFooterAlert {...rest}>
                {alertProps.message}
              </StyledPaperFooterAlert>
            )}
          </StyledDefaultPaper>
        )}
      </>
    )
  },
)

Paper.displayName = 'Paper'

export default Paper
