import browserSync from 'browser-sync';

export default function BrowserSync() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
}
