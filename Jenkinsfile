pipeline {
    agent any
    environment { 
        CI = 'true'
    }
    stages {
        stage('Git'){
            steps {
                checkout scm
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
