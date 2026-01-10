pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Code checkout done'
            }
        }

        stage('Build') {
            steps {
                echo 'Build stage running'
                sh 'ls -l'
            }
        }

        stage('Test') {
            steps {
                echo 'Test stage running'
            }
        }
    }
}

