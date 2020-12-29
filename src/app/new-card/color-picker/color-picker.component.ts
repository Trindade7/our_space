import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-color-picker',
	templateUrl: './color-picker.component.html',
	styleUrls: ['./color-picker.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerComponent implements OnInit {
	config = {
		baseColors: [
			[46, 204, 113],
			[52, 152, 219],
			[155, 89, 182],
			[52, 73, 94],
			[241, 196, 15],
			[230, 126, 34],
			[231, 76, 60]
		],
		lightModifier: 20,
		darkModifier: 0,
		transitionDuration: 200,
		transitionDelay: 25,
		variationTotal: 10
	};

	constructor () { }

	ngOnInit(): void {
	}

	createVariations(color: number[]) {

		for (var i = 0; i < this.config.variationTotal; i++) {
			var newColor = [];

			for (var x = 0; x < color.length; x++) {
				var modifiedColor = (Number(color[x]) - 100) + (this.config.lightModifier * i);

				if (modifiedColor <= 0) {
					modifiedColor = 0;
				} else if (modifiedColor >= 255) {
					modifiedColor = 255;
				}

				newColor.push(modifiedColor);
			}


		}

	}

}
