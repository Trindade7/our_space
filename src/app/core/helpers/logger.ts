import { environment } from '@app-envs/environment';

interface LogType {
  type: 'log' | 'warn' | 'error';
  log: unknown[];
}

export class Logger {
  private static _title = '';
  /**
   *
   * Starts a groupCollapsed log that has to be Closed
   * with closeCollapsed()
   */
  static startCollapsedT(title: string, logs: LogType[] = []): void {
    if (environment.production === false) {
      console.groupCollapsed(title);
      this.printLog(logs);
      for (const log of logs) {
        switch (log.type) {
          case 'log':
            console.log({ log });
            break;

          default:
            break;
        }
      }
    }
  }
  /**
   *
   * console.log a list of data, to be used between startCollapsed
   * and closeCollapsed()
   */
  static groupCollapsedT(logs: LogType[]): void {
    if (environment.production === false) {
      this.printLog(logs);
    }
  }
  /**
   *
   * Logs the data and Ends a groupCollapsed log
   * started with  startCollapsed()
   */
  static endCollapsedT(logs: LogType[] = []): void {
    if (environment.production === false) {
      this.printLog(logs);
      console.groupEnd();
    }
  }

  /**
   *
   * Createsstarts and ends a groupCollapsed log
   * can be used between startCollapsed() and endCollapsed()
   */
  static collapsedT(title: string, logs: LogType[] = []): void {
    if (environment.production === false) {
      console.groupCollapsed(title);
      this.printLog(logs);
      console.groupEnd();
    }
  }

  static printLog(logObject: LogType[]): void {
    for (const log of logObject) {
      switch (log.type) {
        case 'log':
          log.log.map(item => console.log({ item }));
          break;
        case 'error':
          console.error(...log.log);
          log.log.map(item => console.error({ item }));
          break;
        case 'warn':
          console.warn(...log.log);
          log.log.map(item => console.warn({ item }));
          break;

        default:
          break;
      }
    }
  }

  /**
   *
   * Starts a groupCollapsed log that has to be Closed
   * with closeCollapsed()
   */
  static startCollapsed(title: string, logs: unknown[] = []): void {
    if (environment.production === false) {
      this._title = title;
      console.groupCollapsed(title);
      console.log(...logs);
    }
  }
  /**
   *
   * console.log a list of data, to be used between startCollapsed
   * and closeCollapsed()
   */
  static groupCollapsed(logs: unknown[]): void {
    if (environment.production === false) {
      console.log(...logs);
    }
  }
  /**
   *
   * Logs the data and Ends a groupCollapsed log
   * started with  startCollapsed()
   */
  static endCollapsed(logs: unknown[] = []): void {
    if (environment.production === false) {
      console.groupCollapsed(`End ${this._title}`, logs);
      this._title = '';
      console.groupEnd();
    }
  }

  /**
   *
   * Createsstarts and ends a groupCollapsed log
   * can be used between startCollapsed() and endCollapsed()
   */
  static collapsed(title: string, logs: unknown[] = []): void {
    if (environment.production === false) {
      this._title = title;
      console.groupCollapsed(title);
      console.log(...logs);
      console.groupEnd();
    }
  }
}
class LoggerGenneric {
  /**
   *
   * Starts a groupCollapsed log that has to be Closed
   * with closeCollapsed()
   */
  static startCollapsedT(title: string, logs: LogType[] = []): void {
    if (environment.production === false) {
      console.groupCollapsed(title);
      this.printLog(logs);
      for (const log of logs) {
        switch (log.type) {
          case 'log':
            console.log(log);
            break;

          default:
            break;
        }
      }
    }
  }
  /**
   *
   * console.log a list of data, to be used between startCollapsed
   * and closeCollapsed()
   */
  static groupCollapsedT(logs: LogType[]): void {
    if (environment.production === false) {
      this.printLog(logs);
    }
  }
  /**
   *
   * Logs the data and Ends a groupCollapsed log
   * started with  startCollapsed()
   */
  static endCollapsedT(logs: LogType[] = []): void {
    if (environment.production === false) {
      this.printLog(logs);
      console.groupEnd();
    }
  }

  /**
   *
   * Createsstarts and ends a groupCollapsed log
   * can be used between startCollapsed() and endCollapsed()
   */
  static collapsedT(title: string, logs: LogType[] = []): void {
    if (environment.production === false) {
      console.groupCollapsed(title);
      this.printLog(logs);
      console.groupEnd();
    }
  }

  static printLog(logObject: LogType[]): void {
    for (const log of logObject) {
      switch (log.type) {
        case 'log':
          console.log(...log.log);
          break;
        case 'error':
          console.error(...log.log);
          break;
        case 'warn':
          console.warn(...log.log);
          break;

        default:
          break;
      }
    }
  }

  /**
   *
   * Starts a groupCollapsed log that has to be Closed
   * with closeCollapsed()
   */
  static startCollapsed(title: string, logs: unknown[] = []): void {
    if (environment.production === false) {
      console.groupCollapsed(title);
      console.log(...logs);
    }
  }
  /**
   *
   * console.log a list of data, to be used between startCollapsed
   * and closeCollapsed()
   */
  static groupCollapsed(logs: unknown[]): void {
    if (environment.production === false) {
      console.log(...logs);
    }
  }
  /**
   *
   * Logs the data and Ends a groupCollapsed log
   * started with  startCollapsed()
   */
  static endCollapsed(logs: unknown[] = []): void {
    if (environment.production === false) {
      console.log(...logs);
      console.groupEnd();
    }
  }

  /**
   *
   * Createsstarts and ends a groupCollapsed log
   * can be used between startCollapsed() and endCollapsed()
   */
  static collapsed(title: string, logs: unknown[] = []): void {
    if (environment.production === false) {
      console.groupCollapsed(title);
      console.log(...logs);
      console.groupEnd();
    }
  }
}
