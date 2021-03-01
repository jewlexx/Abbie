pipeline {
  agent any
  stages {
    stage('JS Build') {
      steps {
        echo 'Beggining Abbie Build'
        bat 'SET DEBUG=true &&  node -v &&  npm -v &&  npm ci &&  set e &&  npx tsc &&  npm run coverage'
      }
    }

  }
  environment {
    DEBUG = 'true'
    CODECOV_TOKEN = '7095f287-2ab4-4492-bd7d-cfb042624a55'
  }
}