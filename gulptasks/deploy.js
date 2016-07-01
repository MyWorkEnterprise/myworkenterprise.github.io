import cp from 'child_process';

export default function gitDeploy(done) {
  return cp.spawn('git', ['add', '--all'])
              .on('close', () => {
                cp.spawn('git', ['commit', '-m', '"New awesome post :D"'])
                  .on('close', () => {
                    cp.spawn('git', ['push', 'origin', 'master'])
                      .on('close', done);
                  });
    });
}
