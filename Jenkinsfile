pipeline {
    agent none
    environment { 
        WEB_SERVER="35.189.153.174"
        SCRIPT="/home/svengleab_student/script/start.sh"
        NEXUS="35.194.155.218:8082/repository/devops/"
        IMAGE_NAME="web-arc"
    }
    stages {
        stage('Build') {
            steps {
                docker build -t ${NEXUS}web-arc .
            }
        }
        stage('Push') {
            steps {
                docker push -t ${NEXUS}web-arc .
            }
        }
        stage('Deliver') { 
            steps {
                ssh -t root@${WEB_SERVER} ${SCRIPT}
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
            }
        }
    }
}