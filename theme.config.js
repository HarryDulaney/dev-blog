const YEAR = new Date().getFullYear()

export default {
    body: (
        <style jsx>{`
          body {
            margin-top: 8rem;
          }
        `}</style>
    ),
    footer: (
        <footer>
            <small>
                <time>{YEAR}</time>
                © Harry Dulaney.
                <a href="/feed.xml">RSS</a>
            </small>
            <style jsx>{`
              footer {
                margin-top: 8rem;
              }

              a {
                float: right;
              }
            `}</style>
        </footer>
    )
}
