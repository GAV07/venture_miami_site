

export function QRCodes(props) {
    return (
      <div className="">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* Details section */}
          <section aria-labelledby="details-heading">
            <div className="flex flex-col items-center text-center">
              <h2 id="details-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Connect Digitally
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-white">
                Use these QR Codes to join our Talent Repository and then connect directly with companies while you are at the hiring fair.
              </p>
            </div>
            <div className="mt-16 flex justify-center gap-20">
                {props.content.qrCodes.map((code) => (
                  <a href={code.fields.url}>
                    <div>
                        <p className="mb-8 text-base text-center text-white">
                            {code.fields.title}
                        </p>
                        <div className="md:p-10 bg-white drop-shadow-md w-full overflow-hidden rounded-lg">
                            <img
                                src={code.fields.qrCode.fields.file.url}
                                alt="qr codes"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                  </a>
                ))}
              </div>
          </section>
        </div>
      </div>
    )
  }
  