pipeline {
  agent any
  stages {
    stage('Setup Env') {
      steps {
        echo 'Beggining Abbie Build'
        bat(script: 'SET DEBUG=true &&  node -v &&  npm -v &&  npm ci &&  set e &&  npx tsc', label: 'Setup Env Script')
      }
    }

    stage('Build') {
      steps {
        bat(script: 'npm run coverage', label: 'Build script')
      }
    }

  }
  environment {
    DEBUG = 'true'
    CODECOV_TOKEN = '7095f287-2ab4-4492-bd7d-cfb042624a55'
  }
}