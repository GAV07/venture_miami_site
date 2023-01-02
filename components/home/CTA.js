//import { ButtonLink } from './button'
import { Container } from '../container'

export function CTA(props) {
  return (
      <Container className="relative">
        <section className="relative bg-vm-blue md:py-32" aria-labelledby="join-heading">
          <div
            className="hidden absolute inset-x-0 h-1/2 bg-vm-blue lg:block"
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto bg-blue-600 lg:bg-transparent lg:px-8">
            <div className="lg:grid lg:grid-cols-12">
              <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                <div
                  className="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden"
                  aria-hidden="true"
                />
                <div className="max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                  <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                    <img
                      className="object-cover object-center md:rounded-3xl shadow-2xl"
                      src={props.content.image.fields.file.url}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="relative bg-white lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
                <div
                  className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-blue-500"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={384}
                      fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                    />
                  </svg>
                </div>
                <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                  <h2
                    className="text-3xl tracking-tight font-bold"
                    id="join-heading"
                  >
                    {props.content.title}
                  </h2>
                  <p className="text-lg">
                    {props.content.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 w-full justify-start">
                      {props.content.buttons.map((button) => (
                          <a
                          className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm last:text-vm-blue last:bg-white text-black bg-vm-accent hover:text-white hover:bg-blue-900"
                          href={button.fields.url}
                          >
                          {button.fields.text}
                          </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
  )
}
