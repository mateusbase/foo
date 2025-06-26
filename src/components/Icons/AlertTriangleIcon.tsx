import * as React from "react";

type AlertTriangleIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const AlertTriangleIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: AlertTriangleIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 70}
    height={size * 67}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 70 67"
    {...props}
  >
    <path fill="url(#pattern0_3035_15117)" d="M0 .5h70v66H0z" />
    <defs>
      <pattern
        id="pattern0_3035_15117"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#image0_3035_15117"
          transform="matrix(.01964 0 0 .02083 0 0)"
        />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAwCAYAAAC8NUKEAAAEzUlEQVRoBdVazW8cNRQfISFxgCb7XHogQlqpFw70whFO9ACInqqChJDgAH8CIKFygxuCAyckBEItReqFQ/lo7M1ms01bECSp0hZoUkEbkiiEJFTZNLDV1s8PzW7s8ezO7I7nIzQjrfwxfu/9fmOP52d7Pa+gizgckwK+QwF/oGCEAm5IDl/RGDxbUMj83dJY6RAKuNIh4JPo/UkBF2h0uJx/9Bw90vjQQRSsGUWgp46zNTr74MM5hs/Xlf/EDehqeYs2anVqbf1CSv1Drc2r6s8z58x9wUgK9k2+CHLyJnnpZRsoYXOOoq7W+kyoXaX0fE4Q8nODHG5qkLT6bS2Kh6lb/HxCt0UOP+eHIgdPyOENDU7VH1sjoqYBHp1pYLXc0DZSwGs5wMjugs7CPuRggFHj0mQ0/nCtWq/VNRkU7C+a8B7IjiajBxTwvgF14akbRIRh2LGlljp3aMXYcnY8I5Rs5jTORlBASwOi5tKPsdCjbty+Fsx+gm0T3wfZEGWwRs5OaiI4fexKFN5BdfjD4evGh4CPMsBJb0qi9HgAghHh9q+DgEfeb21cCvxA639RBlKA0CDUtbe/jwSasBIvvz6tfaGA0+kfcQpL4sNPm+B8vyR1dykh7uhm2LSGGiPiQ0+kgJXOBAVc1WRo4eN6NEIiurNCOPMS4Xi5nfrluEvNv2smAyngYjpkjlaSD7+iiWD10W1S6lYcQJw6GlbNU0fjmvoz+gpWDgQzIy8dcYTm1pymvftRwLImQ2ujE33QdXrEXgKMl/s1J7V0IviQcjZP5N3nhtChNQp4UxNJIlt0Wzvty4Zod2ROj2zZmh0oW2wSOj+ADO2KzEEOH2hAmFC2mPbWUBtEhoiKlTm9smX5pwSgwi//DqEkdlSkzEHBvjBP2UG2GBu3nmnzLUTmZJEtWchQETJHClbToGju+MVEw2SnkbazUyf7PGUOVeAZA6RyoOUqW4xtimHWGWs5yRz/g2XLFrXwSbxsiXncmckQUS4yR3L2qgFTLTf6yZYYLulns5DDjDLHX4+HZQvvK1tCsa2CeRhph9mOr0wyB0XpLQ3EX6cn2G2xKARZ7cNOg7tOuXQyp1u2qMbl805hrcY2CZ23bjtlU8kc5PChDpxUtsShclsCxHkx9W4yp1e2rCSSLSZcd8ZhcdZtGlm2ZQ6HRt/dHBTslOkVB9kSGbigykQyJ4tsKQh3tNskMseWLWruHSfZEh21uNq+uznE4TkzvFLIlljYeb8zOlC/3RwUMKvJ0OKnqT6QOo6d5jyb2a5JXX/vvMYsOZtor/6Jl47oSv+YIY1sCUWxCu0tJuvr75fzu7pkjoAnvc6JcOcQlVbP9D8kckRSZM/4UNTiZ8FujmAnPOSwoHuGlIzfpXMk0m5e1DujsWBzXmNHzmY8UxBMN9lDqfrbwr/qBX868Mngxh5iQmT3jIBZT3Lgmh2tV3KbyXbloSyfDN4Zzr70ZAVe1GSwOvIvYfO3XQGSNUhrM/QvEBJDh9vTsxRsyhCqHdykW5N1uns73eFRVpCD7P0/R6yN1rE6sq0xSw5jZpe5o5bZqr65t1L4vUc9U2X/I8iZdSTX+weee42k5DBJ1YeY6ZXuDAl4oXPEB4v3Gvg2Hg43pWBf+8qlG/t/Ovy2zU1W9aUAAAAASUVORK5CYII="
        id="image0_3035_15117"
        width="51"
        height="42"
      />
    </defs>
  </svg>
);
export default AlertTriangleIcon;
