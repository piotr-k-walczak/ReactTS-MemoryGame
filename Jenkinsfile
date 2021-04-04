pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Git'){
            steps {
                echo 'Pulling from repository...'
                git 'https://github.com/jenkinsci/git-plugin'
            }
        }
        stage('Build') {
            steps {
                echo 'Building docker image...'
                sh 'docker build -t piotrkwalczak/memory:v.${BUILD_NUMBER} .'
            }
        }
        stage('Publish') { 
            steps {
                echo 'Publishing...'
                sh 'docker push piotrkwalczak/memory:v.${BUILD_NUMBER}'
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
            }
        }
    }
}