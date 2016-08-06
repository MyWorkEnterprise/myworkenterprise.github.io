
import cp from 'child_process'

export default function jekyllBuild (done) {
  return cp.spawn('jekyll', ['build'], { stdio: 'inherit' })
              .on('close', done)
}
