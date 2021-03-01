pipeline {
  agent any
  stages {
    stage('JS Build') {
      steps {
        echo 'Beggining Abbie Build'
        bat 'SET DEBUG=true &&  node -v &&  npm -v &&  npm ci &&  set e &&  tsc &&  npm run coverage'
      }
    }

  }
}